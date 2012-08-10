(function ($) {
Drupal.behaviors.diiAccess = {
  attach: function (context) {
    $('fieldset.dii-access-form', context).drupalSetSummary(function (context) {
      var vals = [];
      $('input[type="checkbox"]:checked', context).each(function () {
        vals.push($.trim($(this).next('label').text()));
      });
      if (!vals.length) {
        vals.push(Drupal.t('Not restricted'));
      }

      var roles = $('input[name^="dii_visible_roles"]');
      $('input[name="dii_visible_roles[2]"]').click(
        toggle($('input[name="dii_visible_roles[2]"]')
      )
    );
      
      return vals.join('<br />');
    });
  }
};

function toggle($el) {
  var roles = $('input[name^="dii_visible_roles"]');
  var is_authenticated = $($el).attr('checked');
  for (var i = 0; i < roles.length; i++) {
    if (i > 1) {
      $('input[name="dii_visible_roles[' + (i + 1) + ']"]').attr('disabled', is_authenticated);
    }
  }
}
})(jQuery);