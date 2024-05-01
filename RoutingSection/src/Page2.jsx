import { Link } from "react-router-dom/cjs/react-router-dom.min"

export const Page2 = () => {
    return (
        <div>
            <h1>Page2ページ</h1>
            <Link to="/page2/999">URL Parameter</Link>
            <br />
            <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
        </div>
    )
}