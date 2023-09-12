<template>
    <div style="border: 1px solid #ccc">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            ref="Toolbar"
            :editor="editor"
            :defaultConfig="toolbarConfig"
            :mode="mode" />
        <Editor
            ref="editor"
            style="height: 500px; overflow-y: hidden"
            v-model="html"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onMounted="onMounted"
            @onCreated="onCreated" />
    </div>
</template>

<script>
// import引入的组件需要注入到对象中才能使用
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {
    components: { Editor, Toolbar },
    emits: ['modelValue'],
    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },
    data() {
        // 这里存放数据
        return {
            editor: null,
            html: '',
            toolbarConfig: {
                // insertKeys: {
                //     index: 0, // 自定义插入的位置
                //     keys: ['uploadAttachment'], // “上传附件”菜单
                // },
            },
            mode: 'default',
            editorConfig: {
                placeholder: '请输入内容...',
                hoverbarKeys: {
                    attachment: {
                        menuKeys: ['downloadAttachment'], // “下载附件”菜单
                    },
                },
                MENU_CONF: {
                    uploadImage: {
                        async customUpload(file, insertFn) {
                            const formData = new FormData()
                            formData.append('file', file)
                          fetch('http://localhost:8088/articles', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify('article')
                          }).then(data => {
                            // 在这里处理返回的数据
                            console.log(data);
                            insertFn(data.data, '', data.data)
                          })
                              .catch(error => {
                                // 处理错误
                                console.error(error);
                              });
                          // file 即选中的文件
                            // 自己实现上传，并得到图片 url alt href
                            // 最后插入图片
                        },
                    },
                    uploadVideo: {
                        async customUpload(file, insertFn) {
                            const formData = new FormData()
                            formData.append('file', file)
                            Request.POST('/platadmin/fileUpload/local', formData, res => {
                                insertFn(res.data)
                            })
                            // file 即选中的文件
                            // 自己实现上传，并得到图片 url alt href
                            // 最后插入图片
                        },
                    },
                },

                // 自定义上传
            },
        }
    },
    watch: {
        modelValue: {
            handler(val) {
                console.log(val)
                this.html = val
            },
            immediate: true,
        },
        html(val) {
            console.log(val)
            this.$emit('update:modelValue', val)
        },
    },
    // 监听属性 类似于data概念
    computed: {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    // 方法集合
    methods: {
        onMounted() {},
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
    },
    beforeUnmount() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    },
}
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang="scss">
.ql-editor {
    padding: 0 !important;
}
</style>
<style lang="scss" scoped>
//@import url(); 引入公共css类
:deep(.w-e-bar-divider) {
    display: none;
}
:deep(.w-e-toolbar) {
    background-color: #f5f7fa;
    color: #333;
}
</style>
