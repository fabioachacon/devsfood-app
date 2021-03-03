import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { 
    Container, 
    CategoryArea, 
    CategoryList } from './styled';

// Components
import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

// API
import api from '../../api'; 

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');

    // States
    const [categories, setCategories] = useState([]);

    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            if(cat.error === "") {
              setCategories(cat.result);
            }else{
                console.error(cat.error);
            }
        }
        getCategories();
    }, []);

    useEffect(() => {
         
    }, [activeCategory])


    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length !== 0 && 
                <>
                 <CategoryArea>
                    Selecione uma Categoria
                    <CategoryList>
                        <CategoryItem 
                            data={{
                                    id: 0, 
                                    title: 'Todas as categorias', 
                                    image: '/assets/food-and-restaurant.png'
                                }}
                                setActiveCategory={setActiveCategory}
                                activeCategory={activeCategory}
                            />
                    
                        {categories.map((item, key) => 
                            <CategoryItem 
                             key={key} 
                             data={item}
                             activeCategory={activeCategory} 
                             setActiveCategory={setActiveCategory}
                             />
                        )}
                    </CategoryList>
                 </CategoryArea>
                </>
            }
        </Container>
    );
}