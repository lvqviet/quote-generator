import React from 'react';
import './loading.scss';

function Loading() {
  return (
    <div>
      <section className="talign-center">
        <div
          className="spinner icon-spinner-2"
          aria-hidden="true"
        ></div>
      </section>
    </div>
  );
}

export default Loading;
