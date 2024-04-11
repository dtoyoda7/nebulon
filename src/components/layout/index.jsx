import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"

const Layout = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export { Layout };