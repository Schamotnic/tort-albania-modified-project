import React from 'react';
import MenuItem from './MenuItem';

interface MenuSectionProps {
    data: any[];
}

function MenuSection(props: MenuSectionProps) {
    const { data } = props;

    return (
        <div>
            {data.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </div>
    );
}

export default MenuSection;
