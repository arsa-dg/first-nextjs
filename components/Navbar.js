import Link from "next/link"

export default function NavBar(){
    return (
        <nav>
            <div className="nav-wrapper #c62828 red darken-3">
            <Link href="/"><a className="brand-logo">Logo</a></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link href="/users"><a>users</a></Link></li>
                <li><Link href="#"><a>masih</a></Link></li>
                <li><Link href="#"><a>belajar</a></Link></li>
                <li><Link href="#"><a>lurrr</a></Link></li>
                <li><Link href="#"><a>rrrrr</a></Link></li>
                <li><Link href="#"><a>rrrr</a></Link></li>
            </ul>
            </div>
        </nav>
    )
}