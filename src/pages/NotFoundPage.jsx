import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFoundPage = () => {
  return (
    <section className="not-found">
      <div className="not-found-container">
        <img src="/notFound.svg" alt="Not Found" />
        <h1>LOOKS LIKE YOU'RE LOST</h1>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/" className="back-home-link">
          Back to Home{" "}
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
