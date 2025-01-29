import { Categories, CategoriesProps } from "@/components/categories";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

export default function Home() {
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState("")

    async function fetchCategories() {
        try {
            const {data} = await fetch('https://api.example.com/categories')
            setCategories(data)
            setCategory(data[0].id) 
        } catch (error) {
            console.log(error)
            Alert.alert("Categories", "Não foi possível carregar as categorias")
        }
    }

    

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           <Categories data={categories} onSelect={setCategory} selected={category}/>        
        </View>
    );
}