/*
 */
'use strict';

/*
 *
 */
Entry.FieldDropdownDynamic = function(content, blockView, index) {
    this._block = blockView.block;
    this._blockView = blockView;

    var box = new Entry.BoxModel();
    this.box = box;

    this.svgGroup = null;

    this._contents = content;
    this._index = index;

    var arrowColor = content.arrowColor;
    if (
        this._block.deletable === Entry.Block.DELETABLE_FALSE_LIGHTEN ||
        this._block.emphasized
    ) {
        arrowColor = blockView._fillColor;
    }

    this._arrowColor = arrowColor;

    var menuName = this._contents.menuName;

    if (_.isFunction(menuName)) this._menuGenerator = menuName;
    else this._menuName = menuName;

    this._CONTENT_HEIGHT = this.getContentHeight(content.dropdownHeight);

    this._font_size = this.getFontSize(content.fontSize);

    this._ROUND = content.roundValue || 3;
    this.renderStart(blockView);
    if (
        blockView &&
        blockView.getBoard() &&
        blockView.getBoard().workspace &&
        blockView.getBoard().workspace.changeEvent
    ) {
        blockView
            .getBoard()
            .workspace.changeEvent.attach(this, this._updateValue);
    }
};

Entry.Utils.inherit(Entry.FieldDropdown, Entry.FieldDropdownDynamic);

(function(p) {
    p.constructor = Entry.FieldDropDownDynamic;

    p._updateValue = function() {
        var object = this._block.getCode().object;
        var options = [];
        if (Entry.container) {
            if (this._menuName)
                options = Entry.container.getDropdownList(
                    this._menuName,
                    object
                );
            else options = this._menuGenerator();
        }

        this._contents.options = options;
        var value = this.getValue();
        if (this._blockView.isInBlockMenu || !value || value == 'null')
            value = options.length !== 0 ? options[0][1] : null;

        this._updateOptions();
        this.setValue(value);
    };

    p.renderOptions = function() {
        var that = this;

        /* 
        * this._attachDisposeEvent(() => {});
        * 이후 disposeEvent가 필요한 경우 다시 작성 필요.
        */

        this.optionGroup = Entry.Dom('ul', {
            class: 'entry-widget-dropdown',
            parent: $('body'),
        });

        var options;
        if (this._menuName)
            options = Entry.container.getDropdownList(this._contents.menuName);
        else options = this._menuGenerator();

        this._contents.options = options;

        var OPTION_X_PADDING = 30;
        var maxWidth = 0;

        var CONTENT_HEIGHT = this._CONTENT_HEIGHT + 4;

        this.optionGroup.bind('mousedown touchstart', (e) =>
            e.stopPropagation()
        );

        this.optionGroup.on('mouseup', '.rect', function(e) {
            e.stopPropagation();
            that.applyValue(this._value);
            that.destroyOption(undefined, true);
            that._selectBlockView();
        });

        var fragment = document.createDocumentFragment();
        options.forEach((option) => {
            var text = (option[0] = this._convert(option[0], option[1]));
            var value = option[1];
            var element = Entry.Dom('li', {
                class: 'rect',
            });
            var elem = element[0];
            elem._value = value;

            var left = Entry.Dom('span', {
                class: 'left',
                parent: element,
            });

            if (this.getValue() == value) left.text('\u2713');

            Entry.Dom('span', {
                class: 'right',
                parent: element,
            }).text(text);

            fragment.appendChild(elem);
        });

        this.optionGroup[0].appendChild(fragment);
        this._position();

        this.optionDomCreated();
    };
})(Entry.FieldDropdownDynamic.prototype);
