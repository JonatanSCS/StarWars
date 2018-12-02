// Components
import Select from 'react-select'

// Utils
import { connect } from 'react-redux'
import BaseComponent from 'utils/BaseComponent'

// Styles
import styles from './styles.scss'

// Internalization
import { withNamespaces } from 'react-i18next'

// Actions
import { updateSearch, updateCategory } from 'containers/App/redux/actions'

class Header extends BaseComponent {
  constructor(props) {
    super(props)

    const { t } = props
    this.options = [
      { value: 'character', label: t('Character') },
      { value: 'location', label: t('Location') },
      { value: 'episode', label: t('Episode') }
    ]

    this._bind('_handleSearchChange', '_handleCategoryChange', '_handleSubmit')
  }

  componentDidMount() {
    const { t } = this.props
    this.props.changeCategory({
      value: 'character',
      label: t('Character')
    })
  }

  _handleSearchChange(e) {
    this.props.changeSearch(e.target.value)
  }

  _handleCategoryChange(category) {
    this.props.changeCategory(category)
  }

  _handleSubmit(e) {
    e.preventDefault()
    console.log(this.props)
  }

  render(props) {
    const { t, search, category } = this.props
    return (
      <div className={styles.Header}>
        <form className={styles.Form} onSubmit={this._handleSubmit}>
          <input className={styles.Submit} type="submit" />
          <img
            src="/static/logos/main.png"
            alt="Rick & Morty"
            className={styles.Logo}
          />
          <input
            className={styles.SearchBox}
            value={search}
            onChange={this._handleSearchChange}
            placeholder={`${t('SearchPlaceholder')} ${category.label}`}
          />
          <Select
            value={category}
            onChange={this._handleCategoryChange}
            options={this.options}
            className={styles.CategoryBox}
            isSearchable={false}
          />
        </form>
        <div className={styles.List}>
          <ul>
            <li>{t('Character')}</li>
            <li>{t('Location')}</li>
            <li>{t('Episode')}</li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.containerApp.search,
    category: state.containerApp.category,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSearch: search => dispatch(updateSearch(search)),
    changeCategory: category => dispatch(updateCategory(category))
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
