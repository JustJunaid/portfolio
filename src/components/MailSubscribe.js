import React from "react"

export default function MailSubscribe() {
  return (
    <section
      class="section py-10"
      style={{ backgroundImage: "url(../assets/img/bg/4.jpg)" }}
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-xl-6 mx-auto">
            <div class="section-dialog bg-primary text-white shadow-6">
              <h4>Latest news direct to your inbox</h4>
              <br />
              <br />
              <p class="text-right small pr-5">Subscribe Now</p>
              <form
                class="input-glass input-round"
                action=""
                method="post"
                target="_blank"
              >
                <div class="input-group">
                  <input
                    type="text"
                    name="EMAIL"
                    class="form-control"
                    placeholder="Enter Email Address"
                  />
                  <span class="input-group-append">
                    <button class="btn btn-glass btn-light" type="button">
                      Sign up <i class="ti-arrow-right fs-9 ml-2"></i>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
