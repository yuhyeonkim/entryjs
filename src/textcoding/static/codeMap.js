/*
 *
 */
"use strict";

goog.provide("Entry.CodeMap");

Entry.CodeMap = {};

(function (cc) {
    cc.Entry = {
        start_neighbor_scene: [{
            "다음": "next",
            "이전": "pre"
        }],
        stop_object: [{
            "thisOnly": "self",
            "thisThread": "this",
            "otherThread": "others",
            "self": "thisOnly",
            "this": "thisThread",
            "others": "otherThread",
            "모든": "all",
            "자신": "thisOnly",
            "이": "thisThread",
            "자신의 다른": "otherThread"
        }],
        change_to_next_shape: [{
            "prev": "pre",
            "pre": "prev",
            "다음": "next",
            "이전": "prev"
        }],
        add_effect_amount: [{
            "색깔": "color",
            "밝기": "brightness",
            "투명도": "transparency"
        }],
        change_effect_amount: [{
            "색깔": "color",
            "밝기": "brightness",
            "투명도": "transparency"
        }],
        change_object_index: [{
            "front": "FRONT",
            "forward": "FORWARD",
            "backward": "BACKWARD",
            "back": "BACK",
            "맨 앞": "FRONT",
            "앞": "FORWARD",
            "뒤": "BACKWARD",
            "맨 뒤": "BACK"
        }],
        set_color: [{
            "red": "#FF0000",
            "orange": "#FF9966",
            "yellow": "#FFFF66",
            "green": "#009900",
            "blue": "#3333FF",
            "navy": "#000099",
            "purple": "#993399",
            "black": "#000000",
            "white": "#FFFFFF",
            "brown": "#990000"
        }],
        reach_something: [
            null,
            {
                "mouse": "mouse_pointer",
                "wall": "edge",
                "wall_up": "edge_up",
                "wall_down": "edge_down",
                "wall_right": "edge_right",
                "wall_left": "edge_left",
                "mouse_pointer": "mouse",
                "edge": "wall",
                "edge_up": "wall_up",
                "edge_down": "wall_down",
                "edge_right": "wall_right",
                "edge_left": "wall_left",
                "마우스포인터": "mouse"
            },
            null
        ],
        create_clone: [{
            "자신": "self",
            "self": "self"
        }],
        locate: [{
            "mouse": "mouse_pointer",
            "mouse_pointer": "mouse",
            "마우스포인터": "mouse"
        }],
        locate_object_time: [
            null,
            {
                "mouse": "mouse_pointer",
                "mouse_pointer": "mouse",
                "마우스포인터": "mouse"
            }
        ],
        see_angle_object: [{
            "mouse": "mouse_pointer",
            "mouse_pointer": "mouse",
            "마우스포인터": "mouse"
        }],
        coordinate_mouse: [
            null,
            {
                "X": "x",
                "Y": "y"
            },
            null
        ],
        coordinate_object: [
            null,
            {
                "자신": "self",
                "self": "self"
            },
            null,
            {
                "크기": "size",
                "방향": "rotation",
                "이동 방향": "direction",
                "모양 번호": "picture_index",
                "모양 이름": "picture_name",
                "picture_index": "shape_number",
                "picture_name": "shape_name",
                "shape_number": "picture_index",
                "shape_name": "picture_name"
            }
        ],
        choose_project_timer_action: [
            null,
            {
                "start": "START",
                "stop": "STOP",
                "reset": "RESET"
            }
        ],
        set_visible_project_timer: [
            null,
            {
                "show": "SHOW",
                "hide": "HIDE"
            }
        ],
        get_date: [
            null,
            {
                "year": "YEAR",
                "month": "MONTH",
                "day": "DAY",
                "hour": "HOUR",
                "minute": "MINUTE",
                "second": "SECOND"
            }
        ],
        distance_something: [
            null,
            {
                "mouse": "mouse_pointer",
                "mouse_pointer": "mouse",
                "마우스포인터": "mouse"
            }
        ],
        set_visible_answer: [{
            "show": "SHOW",
            "hide": "HIDE"
        }]
    };

    cc.Arduino = {
        arduino_ext_analog_list: [{
            "a0": "0",
            "a1": "1",
            "a2": "2",
            "a3": "3",
            "a4": "4",
            "a5": "5"
        }],
        arduino_get_digital_toggle: [{
            "on": "high",
            "off": "low",
            "high": "on",
            "low": "off",
            "HIGH": "on",
            "LOW": "off"
        }]
    };

    cc.Hamster = {
        hamster_play_note_for: [{
                4: "hamster.note_c",
                5: "hamster.note_c_sharp",
                6: "hamster.note_d",
                7: "hamster.note_e_flat",
                8: "hamster.note_e",
                9: "hamster.note_f",
                10: "hamster.note_f_sharp",
                11: "hamster.note_g",
                12: "hamster.note_g_sharp",
                13: "hamster.note_a",
                14: "hamster.note_b_flat",
                15: "hamster.note_b",
                "hamster.note_c": 4,
                "hamster.note_c_sharp": 5,
                "hamster.note_d_flat": 5,
                "hamster.note_d": 6,
                "hamster.note_e_flat": 7,
                "hamster.note_d_sharp": 7,
                "hamster.note_e": 8,
                "hamster.note_f": 9,
                "hamster.note_f_sharp": 10,
                "hamster.note_g_flat": 10,
                "hamster.note_g": 11,
                "hamster.note_g_sharp": 12,
                "hamster.note_a_flat": 12,
                "hamster.note_a": 13,
                "hamster.note_b_flat": 14,
                "hamster.note_a_sharp": 14,
                "hamster.note_b": 15
            },
            null,
            null
        ]
    };

    cc.Turtle = {
        touching_colors: {
            1: "turtle.color_black",
            2: "turtle.color_red",
            3: "turtle.color_orange",
            4: "turtle.color_yellow",
            5: "turtle.color_green",
            6: "turtle.color_cyan",
            7: "turtle.color_blue",
            8: "turtle.color_magenta",
            9: "turtle.color_white",
            "turtle.color_black": 1,
            "turtle.color_red": 2,
            "turtle.color_orange": 3,
            "turtle.color_yellow": 4,
            "turtle.color_green": 5,
            "turtle.color_cyan": 6,
            "turtle.color_sky_blue": 6,
            "turtle.color_blue": 7,
            "turtle.color_magenta": 8,
            "turtle.color_purple": 8,
            "turtle.color_white": 9
        },
        pattern_colors: {
            1: "turtle.color_red",
            3: "turtle.color_yellow",
            4: "turtle.color_green",
            5: "turtle.color_cyan",
            6: "turtle.color_blue",
            7: "turtle.color_magenta",
            "turtle.color_red": 1,
            "turtle.color_yellow": 3,
            "turtle.color_green": 4,
            "turtle.color_cyan": 5,
            "turtle.color_sky_blue": 5,
            "turtle.color_blue": 6,
            "turtle.color_magenta": 7,
            "turtle.color_purple": 7
        },
        units: {
            "CM": "turtle.unit_cm",
            "DEG": "turtle.unit_deg",
            "SEC": "turtle.unit_sec",
            "PULSE": "turtle.unit_pulse",
            "turtle.unit_cm": "CM",
            "turtle.unit_deg": "DEG",
            "turtle.unit_sec": "SEC",
            "turtle.unit_pulse": "PULSE"
        },
        head_tail: {
            "HEAD": "turtle.head",
            "TAIL": "turtle.tail",
            "turtle.head": "HEAD",
            "turtle.tail": "TAIL"
        },
        line_colors: {
            10: "turtle.color_black",
            11: "turtle.color_red",
            13: "turtle.color_green",
            15: "turtle.color_blue",
            17: "turtle.color_any",
            "turtle.color_black": 10,
            "turtle.color_red": 11,
            "turtle.color_green": 13,
            "turtle.color_blue": 15,
            "turtle.color_any": 17
        },
        target_colors: {
            61: "turtle.color_red",
            62: "turtle.color_yellow",
            63: "turtle.color_green",
            64: "turtle.color_cyan",
            65: "turtle.color_blue",
            66: "turtle.color_magenta",
            67: "turtle.color_any",
            "turtle.color_red": 61,
            "turtle.color_yellow": 62,
            "turtle.color_green": 63,
            "turtle.color_cyan": 64,
            "turtle.color_sky_blue": 64,
            "turtle.color_blue": 65,
            "turtle.color_magenta": 66,
            "turtle.color_purple": 66,
            "turtle.color_any": 67
        },
        color_lines: {
            71: "turtle.color_red",
            73: "turtle.color_green",
            75: "turtle.color_blue",
            77: "turtle.color_any",
            "turtle.color_red": 71,
            "turtle.color_green": 73,
            "turtle.color_blue": 75,
            "turtle.color_any": 77
        },
        led_colors: {
            "RED": "turtle.color_red",
            "ORANGE": "turtle.color_orange",
            "YELLOW": "turtle.color_yellow",
            "GREEN": "turtle.color_green",
            "CYAN": "turtle.color_cyan",
            "BLUE": "turtle.color_blue",
            "VIOLET": "turtle.color_violet",
            "MAGENTA": "turtle.color_magenta",
            "WHITE": "turtle.color_white",
            "turtle.color_red": "RED",
            "turtle.color_orange": "ORANGE",
            "turtle.color_yellow": "YELLOW",
            "turtle.color_green": "GREEN",
            "turtle.color_cyan": "CYAN",
            "turtle.color_sky_blue": "CYAN",
            "turtle.color_blue": "BLUE",
            "turtle.color_violet": "VIOLET",
            "turtle.color_magenta": "MAGENTA",
            "turtle.color_purple": "MAGENTA",
            "turtle.color_white": "WHITE"
        },
        sounds: {
            1: "turtle.sound_beep",
            2: "turtle.sound_random",
            3: "turtle.sound_siren",
            4: "turtle.sound_engine",
            5: "turtle.sound_robot",
            6: "turtle.sound_march",
            7: "turtle.sound_birthday",
            8: "turtle.sound_dibidibidip",
            9: "turtle.sound_good_job",
            "turtle.sound_beep": 1,
            "turtle.sound_random": 2,
            "turtle.sound_siren": 3,
            "turtle.sound_engine": 4,
            "turtle.sound_robot": 5,
            "turtle.sound_march": 6,
            "turtle.sound_birthday": 7,
            "turtle.sound_dibidibidip": 8,
            "turtle.sound_good_job": 9
        },
        notes: {
            4: "turtle.note_c",
            5: "turtle.note_c_sharp",
            6: "turtle.note_d",
            7: "turtle.note_e_flat",
            8: "turtle.note_e",
            9: "turtle.note_f",
            10: "turtle.note_f_sharp",
            11: "turtle.note_g",
            12: "turtle.note_g_sharp",
            13: "turtle.note_a",
            14: "turtle.note_b_flat",
            15: "turtle.note_b",
            "turtle.note_c": 4,
            "turtle.note_c_sharp": 5,
            "turtle.note_d_flat": 5,
            "turtle.note_d": 6,
            "turtle.note_e_flat": 7,
            "turtle.note_d_sharp": 7,
            "turtle.note_e": 8,
            "turtle.note_f": 9,
            "turtle.note_f_sharp": 10,
            "turtle.note_g_flat": 10,
            "turtle.note_g": 11,
            "turtle.note_g_sharp": 12,
            "turtle.note_a_flat": 12,
            "turtle.note_a": 13,
            "turtle.note_b_flat": 14,
            "turtle.note_a_sharp": 14,
            "turtle.note_b": 15
        }
    };
})(Entry.CodeMap);