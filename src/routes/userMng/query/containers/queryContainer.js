import { connect } from 'react-redux'
import QueryComp from '../components/query'
import { queryUsers } from '../modules/query'

const mapActionCreators = {
  queryUsers
}

const mapStateToProps = (state) => {
  return {
    userList: state.users.userList
  }
}

export default connect(mapStateToProps, mapActionCreators)(QueryComp)
