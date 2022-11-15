import styled, { css } from "styled-components";

import Dialog from "@mui/material/Dialog";
function SimpleModal({ title, onClose, selectedValue, open, children }) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <ModalWrapper onClose={handleClose} open={open}>
      {children}
    </ModalWrapper>
  );
}

export default SimpleModal;
export const ModalWrapper = styled(Dialog)``;
