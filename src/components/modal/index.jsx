import {Form, Input, Modal, Select} from "antd";

export const Mymodal = ({open, onCreate, onCancel}) => {
    const [form] = Form.useForm();
    return(
        <Modal
            open={open}
            title="Создать диаграмму"
            okText="Добавить"
            cancelText="Отмена"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="name"
                    label="Название диаграммы"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите название диаграммы!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="type"
                    label="Тип диаграммы"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, выберите тип диаграммы!',
                        },
                    ]}
                >
                    <Select>
                        <Select.Option value="line">Line</Select.Option>
                        <Select.Option value="bar">Bar</Select.Option>
                        <Select.Option value="pie">Pie</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="term"
                    label="Срок"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, выберите срок!',
                        },
                    ]}
                >
                    <Select>
                        <Select.Option value="Неделя">Неделя</Select.Option>
                        <Select.Option value="Месяц">Месяц</Select.Option>
                        <Select.Option value="Год">Год</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="unitMeasure"
                    label="Единицы измерения"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, выберите единицы измерения!',
                        },
                    ]}
                >
                    <Select>
                        <Select.Option value="Сотни">Сотни</Select.Option>
                        <Select.Option value="Тысячи">Тысячи</Select.Option>
                        <Select.Option value="Миллионы">Миллионы</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>)
}