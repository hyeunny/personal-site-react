import React, { Component } from 'react';

const DICTIONARY = {
  A: ['adventurous', 'alert', 'advanced', 'alien'],
  B: ['badass', 'brave', 'battle-tested', 'bone'],
  C: ['crispy', 'corny', 'calculating', 'crepe'],
  D: ['daft', 'deadly', 'dangerous', 'door'],
  E: ['energetic', 'entrepreneurial', 'electric', 'eel'],
  F: ['fabulous', 'flatulent', 'fantastic', 'forest'],
  G: ['great', 'good', 'grand', 'gallon'],
  H: ['happy', 'hearty', 'hot', 'hippo', 'hot_module_reloading'],
  I: ['intelligent', 'interesting', 'impeccable', 'imp'],
  J: ['jaded', 'jovial', 'joyous', 'jargon', 'jest_test_runner'],
  K: ['killer', 'korean', 'kite'],
  L: ['likable', 'lovable', 'lizard'],
  M: ['maniacal', 'martian', 'mastermind', 'marble'],
  N: ['natural', 'ninja', 'null', 'natural_language_processing'],
  O: ['orange', 'overlord', 'oligarchy', 'oreo', 'orifice'],
  P: ['pineapple', 'platypus', 'play', 'parchment'],
  Q: ['qualified', 'questing', 'queen', 'quench'],
  R: ['royal', 'rock', 'restraint', 'right'],
  S: ['super', 'starlike', 'sadness', 'solitude'],
  T: ['terrible', 'tuba', 'territory'],
  U: ['ultra', 'understanding', 'umbrella', 'universal_module_definition'],
  V: ['very', 'varsity', 'varnish'],
  W: ['winning', 'warrior', 'wednesday', 'wordpress'],
  X: ['xylophone', 'xanax', 'xml'],
  Y: ['yellow', 'yucky', 'yarn', 'yaml', 'yet_another_markup_language'],
  Z: ['zoo', 'zimbabwe', 'zoom'],
}

class AcronymExpander extends Component {
  render() {
    const {
      enteredWord,
      style
    } = this.props;

    const indivLetters = enteredWord.toUpperCase().split('');

    return (
      <ul 
        className="acronym-expander"
        style={style}
      >
        {indivLetters.map((letter, idx) => {
          const randomWord = DICTIONARY[letter][Math.floor(Math.random()*DICTIONARY[letter].length)].toUpperCase()

          return <li key={idx}>
                    <span className="first-letter">{randomWord[0]}</span>
                    <span>{randomWord.substring(1)}</span>
                  </li>
        })}
      </ul>
    );
  }
}

AcronymExpander.propTypes = {
  enteredWord: React.PropTypes.string
};

export default AcronymExpander;
