import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Audit} from './types';

interface AuditState {
  list: Audit[];
}

const initialState: AuditState = {
  list: [],
};

interface AddAuditPayload {
  ratings: number[];
  checkboxes: boolean[];
  comments: string;
  image: string | null;
}

const auditSlice = createSlice({
  name: 'audit',
  initialState,
  reducers: {
    addAudit: (state, action: PayloadAction<AddAuditPayload>) => {
      const newAudit: Audit = {
        id: Date.now().toString(),
        ratings: action.payload.ratings,
        checkboxes: action.payload.checkboxes,
        comments: action.payload.comments,
        image: action.payload.image,
        timestamp: new Date().toISOString(),
      };
      state.list.push(newAudit);
    },
    deleteAudit: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(audit => audit.id !== action.payload);
    },
    clearAudits: state => {
      state.list = [];
    },
  },
});

export const {addAudit, deleteAudit, clearAudits} = auditSlice.actions;
export default auditSlice.reducer;
