import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  arrowClicked = () => {
    console.log('arrow click')
  }

  render() {
    const {suggestionsItem, onClickingArrow} = this.props
    function arrowClicked() {
      onClickingArrow(suggestionsItem.suggestion)
    }

    return (
      <li className="suggestion-item-cont">
        <p>{suggestionsItem.suggestion}</p>
        <div className="ip-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            className="arrow-search"
            alt="arrow"
            onClick={arrowClicked}
          />
        </div>
      </li>
    )
  }
}
export default SuggestionItem
