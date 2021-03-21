<?php
class mymoduledisplayModuleFrontController extends ModuleFrontController
{
    public function initContent()
    {
        parent::initContent();
        $this->setTemplate('module:fullheightbanner/views/templates/front/display.tpl');
    }
}