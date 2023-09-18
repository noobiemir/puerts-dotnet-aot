using ConsoleAot.Examples;
using Microsoft.Extensions.Hosting;
using Puerts;
using PuertsStaticWrap;

namespace ConsoleAot
{
    internal class HostedService : IHostedService
    {
        private JsEnv _env;

        public Task StartAsync(CancellationToken cancellationToken)
        {

            _env = new JsEnv(new ScriptLoader());

            PuerRegisterInfo_Gen.AddRegisterInfoGetterIntoJsEnv(_env);

            _env.UsingFunc<int, int>();
            Func<int, int> Add3 = _env.Eval<Func<int, int>>(@"
        const func = function(a) {
            return 3 + a;
        }
        func;
    ");

            Console.WriteLine(Add3(Add3(1)));

            CsCallJs.Run(_env);

            JsObjectAccess.Run(_env);

            TsQuickStart.Run(_env);

            Task.Factory.StartNew(async () =>
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    await Task.Delay(1, cancellationToken);
                    _env.Tick();
                }

            }, TaskCreationOptions.LongRunning);

            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _env.Dispose();
            return Task.CompletedTask;
        }
    }
}
