import { Grid } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react'
import "./Cards.css";

function Cards() {
  return (
    <Grid container direction="row">
      <Grid item xs={2} >
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src="https://i.imgur.com/wt7UemZ.png" />
          </div>
          <div className="team-content">
            <h3>Alexandre Barbosa</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social redes-sobre-nos">
            <li><a href="https://www.linkedin.com/in/alexandrebsilva/" target="_blank">
              <LinkedIn className="redes-sobre-nos" />
            </a>
            </li>
            <li>
              <a href="https://github.com/alebs10" target="_blank">
                <GitHub className="redes-sobre-nos" />
              </a>
            </li>
          </ul>

        </div>
      </Grid>
      <Grid item xs={2}>
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src="https://i.imgur.com/F1QfUzU.png" />
          </div>
          <div className="team-content">
            <h3 className="name">Daniel Gardeli</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social">
            <li><a href="https://www.linkedin.com/in/daniel-gardeli/" target="_blank">
              <LinkedIn className="redes-sobre-nos" />
            </a>
            </li>
            <li>
              <a href="https://github.com/gardeli96" target="_blank">
                <GitHub className="redes-sobre-nos" />
              </a>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={2}>
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src="https://i.imgur.com/SaAp6Zo.png" />
          </div>
          <div className="team-content">
            <h3 className="name">Gustavo Henrique</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social">
            <li><a href="https://www.linkedin.com/in/gustavohms1998/" target="_blank">
              <LinkedIn className="redes-sobre-nos" />
            </a>
            </li>
            <li>
              <a href="https://github.com/guhms1998" target="_blank">
                <GitHub className="redes-sobre-nos" />
              </a>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={2}>
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src="https://i.imgur.com/WtctWE7.png" />
          </div>
          <div className="team-content">
            <h3 className="name">Letícia Zuniga</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social">
            <li><a href="https://www.linkedin.com/in/leticia-zuniga/" target="_blank">
              <LinkedIn className="redes-sobre-nos" />
            </a>
            </li>
            <li>
              <a href="https://github.com/LeZuniga" target="_blank">
                <GitHub className="redes-sobre-nos" />
              </a>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={2}>
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src="https://i.imgur.com/O6TWCF8.png" />
          </div>
          <div className="team-content">
            <h3 className="name">Mateus Nogueira</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social">
            <li><a href="https://www.linkedin.com/in/mateusnog95/" target="_blank">
              <LinkedIn className="redes-sobre-nos" />
            </a>
            </li>
            <li>
              <a href="https://github.com/nogran" target="_blank">
                <GitHub className="redes-sobre-nos" />
              </a>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={2}>
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src="https://i.imgur.com/jnVoxIU.png" />
          </div>
          <div className="team-content">
            <h3 className="name">Tainã Xavier</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social">
            <li><a href="https://www.linkedin.com/in/tainaxsp/" target="_blank">
              <LinkedIn className="redes-sobre-nos" />
            </a>
            </li>
            <li>
              <a href="https://github.com/taaixsp" target="_blank">
                <GitHub className="redes-sobre-nos" />
              </a>
            </li>
          </ul>
        </div>
      </Grid>
    </Grid>
  )
}

export default Cards