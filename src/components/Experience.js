import React from 'react';

export const Experience = () => {
  return (
    <div className='experience-wrapper' id='experience'>
      <div className='d-flex justify-content-center'>
        <h1>Recent Experience</h1>
      </div>

      <div className='container experience-content-wrapper'>
        {/* -- */}
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2012-2014</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hic nihil
              fuit, quod quaereremus. At Zeno eum non beatum modo, sed etiam
              divitem dicere ausus est. Duo Reges: constructio interrete.
            </p>
          </div>
        </div>

        {/* -- */}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2014-2016</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hic nihil
              fuit, quod quaereremus. At Zeno eum non beatum modo, sed etiam
              divitem dicere ausus est. Duo Reges: constructio interrete.
            </p>
          </div>
        </div>

        {/* -- */}
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2016-2018</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hic nihil
              fuit, quod quaereremus. At Zeno eum non beatum modo, sed etiam
              divitem dicere ausus est. Duo Reges: constructio interrete.
            </p>
          </div>
        </div>

        {/* -- */}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2018-2021</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hic nihil
              fuit, quod quaereremus. At Zeno eum non beatum modo, sed etiam
              divitem dicere ausus est. Duo Reges: constructio interrete.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
