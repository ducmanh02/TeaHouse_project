import clsx from "clsx";
import styles from "./Button.module.scss";




function Button({primary,...props}) {

    const classes  = clsx(styles.btn,"d-flex", {
        [styles.primary]: primary,
        [styles.warning]: props.warning,
        
    }
    )

    return (
        <>
            <button className={classes} type="button">
                Click Me!
            </button>
        </>
    )
}
export default Button;
