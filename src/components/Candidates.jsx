import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './actions/userAction';
import UserList from './UserList';



function Candidates(props) {
    console.log(props)
    useEffect(() => {
      props.fetchUsers();
    }, []);
    return (
      <>
        <UserList users={props.userReducer.users} />
      </>
    );
  }

const mapStateToProps = (userReducer) => ({userReducer})

const mapDispatchToProps = {fetchUsers}

export default connect(mapStateToProps, mapDispatchToProps)(Candidates)