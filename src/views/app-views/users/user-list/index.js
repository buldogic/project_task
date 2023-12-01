import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export class UserList extends Component {

	state = {
		users: [],
		userProfileVisible: false,
		selectedUser: null
	}

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const userData = await response.json();
      this.setState({ users: userData });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
	

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}



	render() {
		const { users, userProfileVisible, selectedUser } = this.state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<Link className="d-flex" to={`${APP_PREFIX_PATH}/users/setting/${record.id}`}>
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
					</Link>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'City',
				dataIndex: 'address',
				render: address => (
					<span className ="text-capitalize">{address.city}</span>
				),
			},
			{
				title: 'Company name',
				dataIndex: 'company',
				render: company => (
					<span>{company.name} </span>
				),
			},
			{
				title: 'Website',
				dataIndex: 'website',
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right" >
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns} dataSource={users} rowKey='id' />
				<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
			</Card>
		)
	}
}


export default UserList
