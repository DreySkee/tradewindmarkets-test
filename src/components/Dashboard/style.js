export default `
  width: 8000px;

  .table {
    padding-top: 110px;

    .row {
      display: flex;
      
      .item {
        position: relative;
        width: 110px;
        height: 110px;
        border: 1px solid #ccc;
        text-align: center;
        font-size: 11px;
        padding: 10px 0;

        &.just-updated {
          .pool-data {
            background: green !important;
          }
        }

        .item {
          position: absolute;
          left: 0;
          top: -110px;
        }

        &.label {
          font-size: 14px;  
        }
        
        .pool-data {
          position: absolute
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          padding: 10px;
          text-align: left;
          transition: .8s;
          &.warning {
            background: #efb6b6;
          }
        }
      }
    }    
  }
`;