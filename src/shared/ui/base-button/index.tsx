import { Button, ButtonProps } from "@mui/material";
import "./styles.scss";

interface BaseButtonProps extends ButtonProps {
    children: React.ReactNode;
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, ...props }) => {
    return (
        <Button {...props} id="base-button" variant={props.variant ? props.variant : "contained"} disableElevation>
            {children}
        </Button>
    );
};

export default BaseButton;
