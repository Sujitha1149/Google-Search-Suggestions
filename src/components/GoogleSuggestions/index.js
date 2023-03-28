import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickingArrow = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="google-card">
          <div className="input-cont">
            <div className="ip-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt=" search icon"
                className="input-search"
              />
            </div>
            <input
              type="search"
              placeholder="search"
              className="input"
              onChange={this.onSearchInput}
              value={searchInput}
            />
          </div>
          <ul>
            {filteredList.map(eachList => (
              <SuggestionItem
                suggestionsItem={eachList}
                key={eachList.id}
                onClickingArrow={this.onClickingArrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
