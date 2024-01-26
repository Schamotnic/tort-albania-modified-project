import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import axios from 'axios';
import MenuSection from '../components/MenuSection';
import { Tabs } from '@mui/material';

// const API_KEY = '176800db-c1ca-45aa-abe7-dba944a82968'
// const BASKET = 'menu'
// axios.get(`https://getpantry.cloud/apiv1/pantry/${API_KEY}/basket/${BASKET}`)

interface MenuItem {
    name: string;
    items: Array<any>;
}

const Menu: React.FC = () => {

    const [value, setValue] = useState('1');
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    useEffect(() => {
        axios.get(`https://api.jsonstorage.net/v1/json/543d57dc-bf32-4cf7-851a-9ba536178e76/873e8471-e741-44c3-aa20-583474238c4e`)
            .then(response => {
                setMenu(response.data.sections || []);
                setLoading(false);
                return response.data
            })
            .then(data => console.log(data))
            .catch(error => {
                console.error('Error fetching menu data:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    // const handleDelete = async (index: number) => {
    //     try {
    //       const updatedMenu = [...menu];
    //       updatedMenu.splice(index, 1);
    
    //       await axios.post('https://api.jsonstorage.net/v1/json/543d57dc-bf32-4cf7-851a-9ba536178e76/873e8471-e741-44c3-aa20-583474238c4e', {
    //         sections: updatedMenu,
    //       });
    
    //       setMenu(updatedMenu);
    //     } catch (error) {
    //       console.error('Error deleting menu item:', error);
    //     }
    //   };
    
    
    
    return (
        <>

            <Box>
                {loading ? (
                    <p>Загружаем...</p>
                ) : menu && menu.length > 0 ? (
                    <>
                        <TabContext value={value} >
                            <div className='md:flex phone:block'>
                                {/* список доступных категорий еды */}
                                <Box className='md:w-1/6 w-full'>
                                    <Tabs
                                        className='md:fixed md:w-1/6'
                                        orientation={isLargeScreen ? 'vertical' : 'horizontal'}
                                        variant="scrollable"
                                        scrollButtons
                                        value={value}
                                        onChange={handleChange}
                                        sx={{ borderRight: 1, borderColor: 'divider' }}>
                                        {menu.map((el, index) => (
                                            <Tab label={el.name} key={index} value={`${index + 1}`} />
                                        ))}
                                    </Tabs>
                                </Box>
                                {/* список еды в категории */}
                                <div className='md:w-5/6 w-full'>
                                    {menu.map((el, index) => (
                                        <TabPanel value={`${index + 1}`} key={index}>
                                            <MenuSection data={el.items} />
                                            
                                        </TabPanel>
                                    ))}
                                
                                
                                </div>
                            </div>
                        </TabContext>
                    </>
                ) : (
                    <p>Нет доступных блюд.</p>
                )}
            </Box>
        </>
    );
};

export default Menu;
                     
                    
