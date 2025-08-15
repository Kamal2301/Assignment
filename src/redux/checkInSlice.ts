// Initial state
const initialCheckInStatus = {
  IsCheckInApplicable: false,
};

// Reducer
export const checkinReducer = (
  state = initialCheckInStatus,
  action: {type: any},
) => {
  switch (action.type) {
    case 'CHECKING':
      return {
        IsCheckInApplicable: true,
      };
    case 'CHECKDONE':
      return {
        IsCheckInApplicable: false,
      };
    default:
      return state;
  }
};

// Action creator
export const checkin = () => ({
  type: 'CHECKING',
});
export const checDone = () => ({
  type: 'CHECKDONE',
});

// Selector to get IsCheckInApplicable from state.auth
export const selectCheckinData = (state: any) =>
  state.checkIn.IsCheckInApplicable;
