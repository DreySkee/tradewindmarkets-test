const cellWidth = '80px';

export default `
  .table {
    padding-left: 20PX;

    .column {
      display: flex;
      
      .item {
        position: relative;
        width: ${cellWidth};
        height: ${cellWidth};
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        text-align: center;
        font-size: 10px;
        background: #fff;

        &.just-updated {
          .pool-data {
            background: green !important;
          }
        }

        .item {
          position: absolute;
          left: 0;
          top: -${cellWidth};
        }

        &.label {
          font-size: 10px;  

          &.row {
            width: ${cellWidth};
          }
        }
        
        .pool-data {
          position: absolute
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          padding: 5px;
          text-align: left;
          transition: .8s;
          &.warning {
            background: #efb6b6;
          }

          .line-parties {
            display: none;
            position: absolute;
            top: -25px;
            left: 0;
            width: 120px;
            background: #5c5cbb;
            color: #fff;
            padding: 5px;
            text-align: center;

            &:after {
              top: 100%;
              left: 40px;
              border: solid transparent;
              content: " ";
              height: 0;
              width: 0;
              position: absolute;
              pointer-events: none;
              border-color: rgba(92, 92, 187, 0);
              border-top-color: #5c5cbb;
              border-width: 7px;
              margin-left: -7px;
            }
          }

          &:hover {
            .line-parties {
              display: block;
            }  
          }
        }
      }
    }  
    

    .column {
      position: relative;
      width: ${cellWidth};
      display: inline-block;
      vertical-align: top;
      flex-direction: column;
      margin-bottom: 100px;

      .label {
        &:first-child {
          height: 20px;
          padding-top: 2px;
          font-weight: 700;
          border-left: 1px solid #ccc;
          border-top: 1px solid #ccc;
        }
      }

      .item {
        .item {
          top: ${cellWidth};
          left: -20px;

          &.label {
            height: 20px;
            width: ${cellWidth};
            padding-top: 2px;

            transform: rotate(-90deg);
            transform-origin: left top 0;
          }
        }
      }
    }

  }
`;