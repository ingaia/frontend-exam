const modalConfig = (theme) => ({
  overlay: {
    backgroundColor: theme.modal.bgColor,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderRadius: '0',
    border: `1px solid ${theme.modal.borderColor}`,
    background: theme.body.bgColor,
    transform: 'translate(-50%, -50%)',
    padding: '3rem',
  },
});

export default modalConfig;
