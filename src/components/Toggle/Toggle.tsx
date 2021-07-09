import React from 'react';

type ToggleProps = {
    onToggle: (value: boolean) => void;
    defaultChecked?: boolean;
    label?:string;
}
const Toggle: React.FC<ToggleProps> = ({
    onToggle,
    defaultChecked=false,
    label
}) => {
    return <input type="checkbox" name="" id="" />
}

export default Toggle;