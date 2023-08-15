export const checkSessionAndNavigate = (SessionContext, navigate) => {
  if (!SessionContext.session) navigate("/signin");
};
