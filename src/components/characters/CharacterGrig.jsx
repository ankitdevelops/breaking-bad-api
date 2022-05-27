import React,{useEffect} from "react";
import Spinner from "../Spinner";
import CharacterItem from "./CharacterItem";
import { useSelector, useDispatch} from "react-redux";
import { getCharacters } from "../../redux/actions/characterAction";

const CharacterGrig = ({query}) => {
	const items = useSelector((state) => state.characters.characters)
	console.log("items", items)
	const dispatch = useDispatch()
	const isLoading=false
	const q = ''
	useEffect(() => {
		dispatch(getCharacters(query))
	},[dispatch,query])
	return isLoading ? (
		<Spinner />
	) : (
		<section className="cards">
			{items.map((item) => (
				<CharacterItem item={item} key={item.char_id} />
			))}
		</section>
	);
};

export default CharacterGrig;
