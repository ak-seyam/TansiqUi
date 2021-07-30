import { makeStyles } from "@material-ui/core";

export const useFormFieldsStyles = makeStyles({
	root: {
		"& .MuiFormControl-root, & .MuiButtonBase-root" : {
			margin: "12px"
		},
		paddingRight: "24px"
	},
})