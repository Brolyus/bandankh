import React from "react";
import Card from './Card/Card'
import './Groupe.css'
import datas from "./bandDatas.json"

const Groupe = () => {
	return (
		<div className="groupe">
			{datas.map(member => {
				return (
						<Card 
							name={member.name}
							nickname={member.nickname}
							role={member.role}
							description={member.description}
							image={member.image}
							key={member.name}
						/>
				)
			})}
		</div>
	)

};

export default Groupe;