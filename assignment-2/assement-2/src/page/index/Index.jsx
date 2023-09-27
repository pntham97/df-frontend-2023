import { useState } from "react";
import Header from "../../layout/header";
import { Table } from "antd";
import Modal from "../../components/commons/Modal";

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalDeleleVisible, setIsModalDeleteVisible] = useState(false);
  const getInitialState = () => {
    const value = "Programing";
    return value;
  };
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [array, setArray] = useState();
  const [dataSource, setDataSource] = useState([
    {
      key: 1,
      name: "Mike",
      author: "Maria Anders",
      topic: "Germany",
    },
    {
      key: 2,
      name: "John",
      author: "Maria Anders",
      topic: "Germany",
    },
  ]);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      width: "5%",
      align: "center",
      render: (_, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      align: "center",
      width: "105px",
      render: (_, record) => (
        <div className="WrapperAction">
          <div
            className="WrapperIcon"
            onClick={() => {
              handleOpenDeleteModal(record.key);
            }}
          >
            Delete
          </div>
        </div>
      ),
    },
  ];
  // const columns = [
  //   {
  //     title: t('numericalOrder'),
  //     dataIndex: 'stt',
  //     width: '5%',
  //     align: 'center',
  //     render: (_, record, index) => (page - 1) * perPage.value + index + 1,
  //   },
  //   {
  //     title: t('photo'),
  //     dataIndex: 'photo',
  //     align: 'center',
  //     width: '100px',
  //     render: (_, record) => (
  //       <img
  //         src={record?.photo?.length > 0 ? `${record?.photo}?v=${new Date().getTime()}` : noImage}
  //         alt=""
  //         style={{
  //           width: '46px',
  //           height: '46px',
  //           borderRadius: '8px',
  //           objectFit: 'contain',
  //         }}
  //       />
  //     ),
  //   },
  //   {
  //     title: t('bookName'),
  //     dataIndex: 'name',
  //     align: 'left',
  //     width: '15%',
  //     sorter: (a, b) => a.name.localeCompare(b.name),
  //   },
  //   {
  //     title: t('auth'),
  //     dataIndex: 'author',
  //     align: 'left',
  //     width: '15%',
  //     sorter: (a, b) => a.author.localeCompare(b.author),
  //   },
  //   {
  //     title: t('readerUser'),
  //     dataIndex: 'total_reader',
  //     width: '15%',
  //     align: 'right',
  //     sorter: (a, b) => a?.total_reader - b?.total_reader,
  //   },
  //   {
  //     title: t('descriptions'),
  //     dataIndex: 'descriptions',
  //     align: 'left',
  //   },
  //   {
  //     title: t('colInvite'),
  //     width: '90px',
  //     render: (text, record) => (
  //       <>
  //         <S.Button onClick={() => handleInvite(record)}>
  //           <img src={extra} alt={t('inviteButton')} />
  //         </S.Button>
  //       </>
  //     ),
  //   },
  //   {
  //     title: t('actions'),
  //     dataIndex: 'actions',
  //     align: 'center',
  //     width: '105px',
  //     render: (_, record) => (
  //       <S.WrapperAction>
  //         <S.WrapIcon
  //           onClick={() =>
  //             history.push(generatePath(ROUTES_ADMIN.BOOK_DETAIL, { wsname, id: record.id }))
  //           }
  //         >
  //           <img src={see} alt="" />
  //         </S.WrapIcon>
  //         <S.WrapIcon
  //           onClick={() => {
  //             setDeleteConfirm(true);
  //             setId(record?.id);
  //           }}
  //         >
  //           <img src={del} alt="" />
  //         </S.WrapIcon>
  //       </S.WrapperAction>
  //     ),
  //   },
  // ];
  const [valueSelect, setValueSelect] = useState(getInitialState);
  const handleOpenDeleteModal = (e) => {
    setIsModalDeleteVisible(true);
    if (e) {
      var newArray1 = dataSource.filter(function (data) {
        return e !== data.key;
      });
      setArray(newArray1);
    }
  };
  const handleChange = (e) => {
    setValueSelect(e.target.value);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleDeleteCancel = () => {
    setIsModalDeleteVisible(false);
  };
  const summitForm = (e) => {
    if (e) {
      var newArray = {
        key: dataSource.length + 1,
        name,
        author,
        topic: valueSelect,
      };

      setDataSource((prev) => [...prev, newArray]);
    }
    handleCancel();
  };
  const handleDelete = () => {
    setDataSource(array);
    handleDeleteCancel();
  };
  return (
    <>
      <div className="container">
        <Header />
        <div className="body">
          <div className="search">
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Nhập tên sách"
            />
            <button
              onClick={() => {
                setIsModalVisible(true);
              }}
              className="button-add"
            >
              Add Book
            </button>
          </div>
        </div>
        <div className="wrapperTable">
          <Table dataSource={dataSource} columns={columns} />{" "}
        </div>
        <Modal
          title="Delete"
          open={isModalDeleleVisible}
          onCancel={handleDeleteCancel}
          width="416px"
          footer={null}
          has_button={false}

          // onOk={summitForm}
        >
          <div className="form-button-delete">
            <button onClick={handleDelete} className="button-add">
              Xóa
            </button>
            <button onClick={handleDeleteCancel} className="button-no">
              Hủy
            </button>
          </div>
        </Modal>
        <Modal
          title="addFile"
          open={isModalVisible}
          onCancel={handleCancel}
          width="616px"
          footer={null}
          paragraph={true}
          onOk={summitForm}
        >
          <form onSubmit={(e) => summitForm(e)} className="modal-form">
            <div className="body-modal">
              <div className="modal-colum">
                <label htmlFor="name">Name</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="modal-colum">
                <label htmlFor="author">Author</label>
                <input
                  className="form-input"
                  type="text"
                  name="author"
                  id="author"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="modal-colum">
                <label htmlFor="cars">Topic</label>

                <select
                  value={valueSelect}
                  onChange={handleChange}
                  className="form-input"
                  name="cars"
                  id="cars"
                >
                  <option value="Programing">Programing</option>
                  <option value="Database">Database</option>
                  <option value="DevOps">DevOps</option>
                </select>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Index;
