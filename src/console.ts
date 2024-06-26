// console.ts - example of entrypoint
import { AppModule } from './app.module'
import { BootstrapConsole } from 'nestjs-console'

const bootstrap = new BootstrapConsole({
	module: AppModule,
	useDecorators: true,
})
bootstrap.init().then(async (app) => {
	try {
		await app.init()
		await bootstrap.boot()
		await app.close()
	} catch (e) {
		// eslint-disable-next-line no-console
		console.error(e)
		await app.close()
		process.exit(1)
	}
})
