<?php

class Madcomputing_Quoteviewer_Helper_Admin extends Mage_Core_Helper_Abstract
{
	public function isActionAllowed($action){
		return Mage::getSingleton('Admin/session')->isAllowed('quoteviewer/index' . $action);
	}
}