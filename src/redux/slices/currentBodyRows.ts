import { createSlice } from '@reduxjs/toolkit';
import { SortColumnType, SortColumnValueType } from 'redux/slices/filterSystem';

export interface IGetCurrentBodyRowsDto {
  system: string;
  adsAccount: string;
  status: string;
  dayToCutOff: number;
  balance: number;
  avgCostPerDay: number;
  upDated: number;
  id: number;
}

export interface IModalStateDto {
  includeVat?: boolean;
  currency?: string;
  lastDay?: number;
  cutDay?: number;
}

const initialState: {
  allRows: IGetCurrentBodyRowsDto[];
  allFilterRowsSystem: IGetCurrentBodyRowsDto[];
  modalState: IModalStateDto;
} = {
  allRows: [],
  allFilterRowsSystem: [],
  modalState: {},
};

export const currentBodyRowsSlice = createSlice({
  name: 'currentBodyRows',
  initialState,
  reducers: {
    getCurrentBodyRows: (state, action) => {
      state.allRows = action.payload;
      state.allFilterRowsSystem = action.payload;
    },
    filterSystemCurrentBodyRows: (
      state,
      action: {
        payload: {
          systemName: string;
          statusName: string;
          searchName: string;
          sortName: SortColumnType;
          sortValue: SortColumnValueType;
        };
      },
    ) => {
      const result: IGetCurrentBodyRowsDto[] = state.allRows.filter((el) => {
        if (
          action.payload.systemName === el.system &&
          action.payload.statusName === el.status &&
          el.adsAccount.includes(action.payload.searchName)
        ) {
          return true;
        }
        if (
          action.payload.systemName === '' &&
          action.payload.statusName === el.status &&
          el.adsAccount.includes(action.payload.searchName)
        ) {
          return true;
        }
        if (
          action.payload.systemName === el.system &&
          action.payload.statusName === '' &&
          el.adsAccount.includes(action.payload.searchName)
        ) {
          return true;
        }
        if (
          action.payload.systemName === '' &&
          action.payload.statusName === '' &&
          el.adsAccount.includes(action.payload.searchName)
        ) {
          return true;
        }
        if (
          action.payload.systemName === el.system &&
          action.payload.statusName === el.status &&
          action.payload.searchName === ''
        ) {
          return true;
        }
        if (
          action.payload.systemName === '' &&
          action.payload.statusName === el.status &&
          action.payload.searchName === ''
        ) {
          return true;
        }
        if (
          action.payload.systemName === el.system &&
          action.payload.statusName === '' &&
          action.payload.searchName === ''
        ) {
          return true;
        }
        if (action.payload.systemName === '' && action.payload.statusName === '' && action.payload.searchName === '') {
          return true;
        }
      });

      if (action.payload.sortName === 'balance' && action.payload.sortValue === 'up') {
        state.allFilterRowsSystem = result.sort((a, b) => {
          return a.balance - b.balance;
        });
      }
      if (action.payload.sortName === 'balance' && action.payload.sortValue === 'down') {
        state.allFilterRowsSystem = result.sort((a, b) => {
          return b.balance - a.balance;
        });
      }
      if (action.payload.sortName === 'daysCutOff' && action.payload.sortValue === 'up') {
        state.allFilterRowsSystem = result.sort((a, b) => {
          return a.dayToCutOff - b.dayToCutOff;
        });
      }
      if (action.payload.sortName === 'daysCutOff' && action.payload.sortValue === 'down') {
        state.allFilterRowsSystem = result.sort((a, b) => {
          return b.dayToCutOff - a.dayToCutOff;
        });
      }
      if (action.payload.sortName === 'avgCost' && action.payload.sortValue === 'up') {
        state.allFilterRowsSystem = result.sort((a, b) => {
          return a.avgCostPerDay - b.avgCostPerDay;
        });
      }
      if (action.payload.sortName === 'avgCost' && action.payload.sortValue === 'down') {
        state.allFilterRowsSystem = result.sort((a, b) => {
          return b.avgCostPerDay - a.avgCostPerDay;
        });
      }
      if (action.payload.sortName === 'updated' && action.payload.sortValue === 'up') {
        state.allFilterRowsSystem = result.sort((a, b) => {
          const dateA = new Date(a.upDated);
          const dateB = new Date(b.upDated);
          if (dateA > dateB) {
            return 1;
          } else {
            return -1;
          }
        });
      }
      if (action.payload.sortName === 'updated' && action.payload.sortValue === 'down') {
        state.allFilterRowsSystem = result.sort((a, b) => {
          const dateA = new Date(a.upDated);
          const dateB = new Date(b.upDated);
          if (dateA < dateB) {
            return 1;
          } else {
            return -1;
          }
        });
      }
      if (action.payload.sortName === 'accountName' && action.payload.sortValue === 'up') {
        state.allFilterRowsSystem = result.sort((a, b) => {
          return a.adsAccount.localeCompare(b.adsAccount);
        });
      }
      if (action.payload.sortName === 'accountName' && action.payload.sortValue === 'down') {
        state.allFilterRowsSystem = result.sort((a, b) => {
          return b.adsAccount.localeCompare(a.adsAccount);
        });
      } else {
        state.allFilterRowsSystem = result;
      }
    },

    setModalState: (state, action: { payload: IModalStateDto }) => {
      state.modalState = action.payload;
    },
  },
});
