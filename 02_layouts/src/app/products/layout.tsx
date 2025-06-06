import Header from '../_Header/Header'
import Footer from '../_Footer/Footer'

export default function ProductLayout({children}: { children: React.ReactNode }) {
    return (<html>
        <body>
            <Header/>
            {children}
            <Footer/>
        </body>
        </html>
    )
}