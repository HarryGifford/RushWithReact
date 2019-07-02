import * as React from "react";

import {
    PrimaryButton,
    DefaultButton,
    DialogFooter,
    TextField
} from "office-ui-fabric-react";

/**
 * Main App component.
 */
export default (): JSX.Element => (
    <form>
        <TextField label="Username" autoComplete="username" />
        <TextField
            label="Password"
            autoComplete="current-password"
            type="password"
        />
        <DialogFooter>
            <PrimaryButton text="OK" />
            <DefaultButton text="Cancel" />
        </DialogFooter>
    </form>
);
