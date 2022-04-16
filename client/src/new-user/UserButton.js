//?
import { useEffect } from "react";
import { Avatar, Popover } from "antd";
import { useNameContext } from "./context/NameContext";
import { UserOutlined } from "@ant-design/icons";
import Users from "./Users";

//?
const avatarStyle = {
	backgroundColor: "#87d068",
	position: "fixed",
	top: "50px",
	right: "50px",
	cursor: "pointer",
};

// todo
export default function UserButton() {
	//
	const [name, setName] = useNameContext();

	// Պետք ա աշխատի միայն կայքը բացելի՝ մեկ անգամ։
	useEffect(() => {
		fetch("/users/name")
			.then((response) => response.json())
			.then((result) => setName(result));
	}, [setName]);

	//
	return (
		<>
			<Popover placement="bottomRight" trigger="click" content={Users}>
				<Avatar key="main" style={avatarStyle} size={40}>
					{name ? (
						name[0]?.toUpperCase()
					) : (
						<UserOutlined style={{ verticalAlign: 2 }} />
					)}
				</Avatar>
			</Popover>
		</>
	);
}
