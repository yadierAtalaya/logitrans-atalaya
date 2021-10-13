import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavAtalaya } from 'components/NavAtalaya'
import { FooterAtalaya } from 'components/FooterAtalaya'
import ContainerBtns from 'components/ContainerBtns'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ContainerBtns />
			<NavAtalaya />
			<Component {...pageProps} />
			<FooterAtalaya />
		</>
	)
}

export default MyApp
