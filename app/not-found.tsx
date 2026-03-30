import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import React from "react"
import Image from "next/image"
export default function NotFoundPage() {
    return(
    <>
    <Header />
    <div className="flex flex-col items-center justify-center mt-30 mb-40">
        <Image src="/logooooo.png" alt="six2go" width={200} height={10} priority />
        <h1 className="text-3xl font-bold mt-10 mb-4">404 - you have stumbled upon a page that does not exist</h1>
        <p className="text-lg mb-10">The page you are looking for does not exist.</p>
        <Link href="/" className="text-blue-500 hover:text-blue-700 hover:underline">Go back to the home page</Link>
    </div>
    <Footer />
    </>
    )
}