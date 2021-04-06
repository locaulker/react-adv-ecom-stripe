import React from "react"
import styled from "styled-components"

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          Join Our Newsletter -{" "}
          <em>
            get <span style={{ fontWeight: "400", color: "red" }}>20%</span> off
          </em>
        </h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sunt
            optio nisi, laudantium alias aspernatur minima fugit exercitationem
            aliquid? Animi.
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/xrgrgqzl"
            method="POST"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter your email"
              name="_replyto"
            />
            <button type="submit" className="submit-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  background: #f5f5f5;
  h3 {
    text-transform: none;
    font-weight: 300;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.75rem 1rem;
    border: 1px solid var(--clr-grey-5);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-5);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    /* color: var(--clr-black); */
    /* text-transform: capitalize; */
    font-style: italic;
    color: #adacac;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-white);
  }
  .submit-btn:hover {
    color: var(--clr-grey-9);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
