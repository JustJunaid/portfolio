import React from "react"
import { Link } from "gatsby"

export default function HitMeUp() {
  return (
    <section class="section text-center">
      <h2 class="mb-6">Get a Quote</h2>
      <p class="lead text-muted">
        Like the work? Want to get those million dollar ideas into reality?
      </p>
      <hr class="w-50px" />
      <Link class="btn btn-lg btn-round btn-success" to="/contact">
        Hit me Up
      </Link>
    </section>
  )
}
