// BenefitSection.jsx
import React from 'react';
import './benefit.css';

export default function Benefit_section() {
  return (
    <div className="benefit-section">
      <div className="benefit-left">
        <h2 className="benefit-title">Gets your best benefit</h2>
        <p className="benefit-subtitle">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
          <br /><br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>

      <div className="benefit-right">
        <img src="./benefit.png" alt="Benefit" className="benefit-image" />
      </div>
    </div>
  );
}
