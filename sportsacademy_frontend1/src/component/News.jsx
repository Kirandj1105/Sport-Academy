import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import './css/News.css';
import './css/style.css';
import { Button, Modal } from 'react-bootstrap';

const articles = [
  // for first row
  {
    moreInfo: `South Mumbai have been deducted two points in their Maharashtra  Test Championship (MTC) 2025 cycle after their agonisingly crushing defeat at the hands of South Mumbai in the first Test at the SuperSport Park, Centurion, in the two-match Test series, as the South won the match by an innings and 100 runs. Not only India have faced two points deduction due to their loss against the South Mumbai, but have also been fined 10% of the match fees due to non-maintainence of the required over rate.`
  }, 

  {
    moreInfo: `Ashu Malik goes in the raid with less than 30 seconds on the mat which means it will be the last raid of the match. He waits enough to roll down the clock first and then does the clean-up act to come back with THREE TOUCHPOINTS with a SUPER RAID to all-out UP Thane in the last raid! Dadar gets five points as it wins by 35-25!`
  },
  {
    moreInfo: `In a thrilling showdown at the iconic Stadium Wankhede, Team Bhaindar and Team Dombivali clashed in a match that will be remembered for its intense action and dramatic moments. The atmosphere was electric as passionate fans filled the stands, eagerly anticipating the battle between these two formidable teams.

    The first half kicked off with both teams displaying incredible skill and determination. Team A took an early lead with a stunning goal, showcasing their offensive prowess. However, Team Dombivli quickly responded with a strategic play that resulted in an equalizer, setting the stage for a fiercely contested match.`
  },

  // for second row
  {
    moreInfo: `Perhaps the most startling of Rafael Nadal’s achievements – even more so than the ridiculous haul of 14 French Open titles – was the 912 consecutive weeks he spent in the top 10 of the world rankings. Second-best on that list in men’s tennis is Jimmy Connors, with 788.

    Nadal played his first competitive match in nearly a year at the Brisbane International on Sunday, losing his first-round doubles tie in straight sets. The singles tournament will start in the coming week, where his first opponent is 2020 US Open champion Dominic Thiem. His participation in Brisbane is a tune up for the Australian Open, in what could be his final trip down under as a competitor.`
  },
  {
    moreInfo: `Legendary Australian cricket team opener Justin Langer compared the Indian Premier League (IPL) to the Olympic Games and said that every game in the competition is a spectacle. Langer became the head coach of Lucknow Super Giants (LSG) ahead of the IPL 2024 season as the franchise moved away from the management of Andy Flower and Gautam Gambhir. Langer mentioned his conversations with Ricky Ponting and Tom Moody as the ex-Australia coach got ready for his stint in the IPL.`
  },
  {
    moreInfo: `The newly elected president of the Wrestling Federation of India (WFI) Sanjay Singh on Saturday stated that taking retirement is a personal call of an athlete and said he would refrain to speak on this matter. Earlier, Olympic medallist Sakshi Malik, a face of the wrestlers' protest against Brij Bhushan Sharan Singh over sexual harassment allegations, announced on Thursday that she is quitting wrestling. Her decision came within an hour after Sanjay Singh was elected as the new WFI chief, replacing Brij Bhushan Sharan Singh.`,
  },

  // for third row
  {
    moreInfo: `The newly elected president of the Wrestling Federation of India (WFI) Sanjay Singh on Saturday stated that taking retirement is a personal call of an athlete and said he would refrain to speak on this matter. Earlier, Olympic medallist Sakshi Malik, a face of the wrestlers' protest against Brij Bhushan Sharan Singh over sexual harassment allegations, announced on Thursday that she is quitting wrestling. Her decision came within an hour after Sanjay Singh was elected as the new WFI chief, replacing Brij Bhushan Sharan Singh.`
  },
  {
    moreInfo: `There’s a 20-year-old Olympic medal-sized heartbreak that Satwiksairaj Rankireddy and Chirag Shetty can help mend if they step on the podium in Paris next year. The 2003 sting in cricket couldn’t be undone in 2023, but a 2004 Olympic sniffle and sob can be upturned into a smile in a racquet sport in 2024.

    They were adored in Indian sport. It had the potential to become a personal all-time favourite Olympic medal, such was the emotional investment in that match that lasted over four hours going deep into an Athenian abyss of a dark night. And ended in a 7-6 (5), 4-6, 16-14 heartbreak that has been nursed for years, but never patched back to find closure.`
  },
  {
    moreInfo: `Over the last six months, India’s D Gukesh has been on something of a world tour. Since the FIDE World Cup in July-August in Azerbaijan’s Baku, the 17-year-old has not spent more than 10 days at a stretch at his home in Chennai as he chased a spot at the next year’s Candidates tournament relentlessly, whilst also attending to professional commitments around the world.

    After the World Cup in Baku, Gukesh went to Germany for the FIDE World Rapid Team Championships, Kolkata for the Tata Steel India Rapid and Blitz event and the Asian Games national team camp, Germany again for the Armageddon event, China’s Hangzhou for the Asian Games, Doha for Qatar Masters and to the Isle of Man for the FIDE Grand Swiss. There were also pitstops at London for the London Classic before a door opened for him to edge closer to the Candidates with a last-minute Chennai Grand Masters event, where he did enough to edge ahead of Anish Giri in the FIDE Circuit race to the Candidates spot.`
  }
];

export function News()
{
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleExploreMore = (articleIndex) => {
    setSelectedArticle(articles[articleIndex]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5 custom container-card">
      <h1 id="rel-art" className="text-center">Sports Related Articles</h1>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      {/* first row*/}
      <div className="row row-cols-1 row-cols-md-3 g-4 cards">
        {/* first row first column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={0} class="col">
            <div className="card">
              {/* <img src={Turmeric} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Mumbai south vs panvel</h5>
                <p className="card-text">Mumbai South won match By 100 runs</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" className="btn btn-primary" onClick={() => handleExploreMore(0)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

        {/* first row second column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={1} class="col">
            <div className="card">
              {/* <img src={chili} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Thane vs Dadar</h5>
                <p className="card-text">Ashu malik was man of the match!!!</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(1)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

        {/* first row Third column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={2} class="col">
            <div className="card">
              {/* <img src={Ginger} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Mira Bhaindar Vs Dombivali</h5>
                <p className="card-text">They played very well... Mira bhaindar won the match</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(2)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      {/* second row*/}
      <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
        {/* second row first column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={3} className="col">
            <div className="card">
              {/* <img src={Shiitake} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Tennis</h5>
                <p className="card-text">Rafael Nadal’s comeback could add a layer of intrigue to a sport slowly moving into the future</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(3)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

        {/* second row second column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={4} class="col">
            <div className="card">
              {/* <img src={Eucalyptus} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Australia</h5>
                <p className="card-text">"Every Game Is...": Australia Great Compares IPL To Olympics In Massive Verdict</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(4)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

        {/* second row third column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={5} class="col">
            <div className="card">
              {/* <img src={Lavender} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">World Cup</h5>
                <p className="card-text">World Cup 2023: Another Heartbreak For India As Australia Clinch Their Sixth Title</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(5)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      {/* third row*/}
      <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
        {/* third row first column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={6} className="col">
            <div className="card">
              {/* <img src={mint} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Satwik and Chirag</h5>
                <p className="card-text">In 2024, can Satwik-Chirag mend the Paes-Bhupathi heartbreak of 2004 by winning an Olympic medal?</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(6)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

        {/* third row second column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={7} class="col">
            <div className="card">
              {/* <img src={fenugreek} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Back to 2023's</h5>
                <p className="card-text">Pause, rewind, play: From Pat Cummins silencing Motera to Sheetal Devi, the archer without arms, looking back at 2023’s newsmakers</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(7)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

        {/* third row second column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={8} class="col">
            <div className="card">
              {/* <img src={magnesium} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Chess</h5>
                <p className="card-text">After 6 months of being asked the same question, Gukesh finally answers by qualifying for Candidates</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(8)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      <div>
        <h2 className="text-center mt-2 mb-3" id="After-heading">Author:  Mandeep Singh (Sports Reporter)
</h2>
      </div>
      <div className="Authorcard">
        <p id="After-heading-text">In a highly anticipated local soccer derby held at City Stadium last night, fans were treated to a sensational match that ended in a thrilling draw. The clash between hometown rivals, Team City United and Team Riverfront FC, lived up to its billing as both teams showcased their skill and determination on the field.

The first half saw Team City United take the lead with a spectacular goal from striker Goutam Patil, sending the home crowd into wild cheers. However, Team Riverfront FC responded swiftly with a well-coordinated play that resulted in an equalizing goal just before halftime.

The second half was a rollercoaster of emotions, with both teams creating numerous scoring opportunities. Team City United's defense held strong, denying several attempts from Team Riverfront FC. The tension reached its peak in the final minutes when Team Riverfront FC's star player, Emily Rodriguez, scored a sensational goal, putting her team in the lead.

Just when it seemed like Team Riverfront FC would secure the victory, Team City United mounted a last-minute comeback. In the dying moments of the match, midfielder Chris Anderson netted an equalizer, securing a 2-2 draw for Team City United.

The electrifying atmosphere at City Stadium reflected the passion of the local fans, and the draw left both sets of supporters with mixed emotions. The players received a well-deserved ovation for their outstanding performance in a match that will be remembered as a classic local derby.

Tags: Soccer, Local Sports, Mumbai, City United, Riverfront FC, Draw</p>
      </div>

      {/* Modal for displaying more information */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="more-info">More information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedArticle && (
            <div>
              <p id="more-info-article">{selectedArticle.moreInfo}</p>
              {selectedArticle.cautionTitle && (
                <>
                  <p id="more-info-caution-title">{selectedArticle.cautionTitle}</p>
                  <p id="more-info-caution">{selectedArticle.caution}</p>
                </>
              )}

              {/* add more information here */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button id="button" class="btn btn-primary" variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>

  );
};

export default News;