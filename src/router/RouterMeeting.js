import MeetingStatus from "@/views/meeting/MeetingStatus.vue";

const router = [
    {
        path: '/meeting/status',
        name: 'MeetingStatus',
        meta: {
            title: '会议预约状态',
        },
        component: MeetingStatus
    },
];

export default router;
